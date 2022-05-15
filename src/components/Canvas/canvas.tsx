import React, { MouseEventHandler, useEffect, useRef } from 'react'
import { useWindowDimensions } from '../../hooks/useWindowDimension.hook'

let lastFrame: number
let frameRate = 1000 / 30


interface Vec2 {
    x: number,
    y: number
}



interface Point {
    lastPos: { x: number, y: number },
    initialPos: { x: number, y: number },
    nextPos: { x: number, y: number },
    direction: Vec2,
    velocity: number,
    acceleration: number,
    force: 'pull' | 'push',
    maxDistance: number,
    deceleration: number
}


let points: Point[][] = []


let timeout: number | undefined
let frames: number[] = []


const PlaygroundCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef<{ x: number, y: number, last_measure: number, velocity: number, direction: Vec2 } | undefined>(undefined)
    const { width } = useWindowDimensions()

    useEffect(() => {

        for (let frame of frames) {
            cancelAnimationFrame(frame)

        }
        frames = []
        animate()


    }, [width])



    const animate = () => {
        points = [];
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")
        if (ctx) {
            ctx?.clearRect(0, 0, canvas!!.width, canvas!!.height);
            ctx.fillStyle = '#ffffffAA'

            ctx.strokeStyle = '#ffffff'
        }
        if (canvas) {
            initPoints(canvas.width, canvas.height)
        }


        frames.push(requestAnimationFrame(draw))
    }


    const draw = (time: number) => {
        let start = new Date().getTime()


        if (!lastFrame) {
            lastFrame = time
        } else if (time < lastFrame + frameRate) {
            frames.push(requestAnimationFrame(draw))
            return
        }


        if (canvasRef.current) {

            const canvas = canvasRef.current
            const ctx = canvas.getContext("2d")
            ctx?.clearRect(0, 0, canvas.width, canvas.height);




            if (ctx) {

                recalculateCells(mouseRef.current)


                ctx.beginPath()

                let angle = 2 * Math.PI

                for (let row of points) {
                    for (let cell of row) {
                        ctx.moveTo(cell.nextPos.x, cell.nextPos.y)
                        ctx.rect(cell.nextPos.x, cell.nextPos.y, 1, 1)
                        // ctx.arc(cell.nextPos.x, cell.nextPos.y, 1, 0, angle)

                    }
                }

                ctx.fill()


            }
        }
        frames.push(requestAnimationFrame(draw))

        let end = new Date().getTime()



    }


    const recalculateCells = (mouse?: { x: number, y: number, velocity: number, direction: Vec2 }) => {
        let radius = 60
        let maxVelocity = 2

        for (let r = 0; r < points.length; r++) {
            for (let c = 0; c < points[r].length; c++) {
                let point = points[r][c]

                // if (point.velocity === maxVelocity) {
                //     console.log(point)
                // }


                if (mouse && (pointDistance(mouse, point.lastPos) <= radius)) {
                    let vec = {
                        x: mouse.x - point.lastPos.x,
                        y: mouse.y - point.lastPos.y
                    }

                    let normal = normalize(vec)


                    let velocityVector = normalize(mouse.direction)

                    let new_direction = {
                        x: normal.x * -1 + velocityVector.x,
                        y: normal.y * -1 + velocityVector.y
                    }





                    point.direction = normalize(new_direction)


                    let randFactor = Math.round(Math.random() * 100) / 500

                    point.acceleration = 0.05 + randFactor + mouse.velocity / 10

                    // console.log(point.acceleration)
                    // console.log(point.acceleration, randFactor, mouse.velocity)
                    point.force = 'push'
                    let velocity = mouse.velocity > 10 ? 10 : mouse.velocity

                    point.maxDistance = (velocity * 75) * randFactor

                    if (mouse.velocity > 0.1) {
                        point.deceleration = 0.02

                    } else {
                        point.deceleration = 0.15
                    }




                } else if (point.velocity <= 0 && point.force == 'push') {
                    let vec = {
                        x: point.initialPos.x - point.lastPos.x,
                        y: point.initialPos.y - point.lastPos.y
                    }

                    let normal = normalize(vec)

                    point.direction = normal



                    point.deceleration = 0
                    point.acceleration = 0.1

                    point.force = 'pull'

                }

                // else if ((pointDistance(point.initialPos, point.lastPos) > point.maxDistance) && point.force == 'push' ) {
                //     // let vec = {
                //     //     x: point.initialPos.x - point.lastPos.x,
                //     //     y: point.initialPos.y - point.lastPos.y
                //     // }

                //     // let normal = normalize(vec)

                //     // point.direction = normal
                //     // let randFactor = Math.round(Math.random()*100) / 300 


                //     // point.acceleration = 0.05 + randFactor 
                //     // point.force = 'pull'

                //     point.deceleration = 0.03




                // }

                else if (point.force === 'pull' && pointDistance(point.initialPos, point.lastPos) < 2) {
                    point.acceleration = 0
                    point.velocity = 0
                    point.direction = {
                        x: 0,
                        y: 0
                    }
                    point.lastPos = point.initialPos
                    point.force = 'pull'
                    point.deceleration = 0
                }




                let new_velocity = Math.max(0, Math.min(maxVelocity, point.velocity + point.acceleration))
                let new_pos = {
                    x: point.lastPos.x + point.direction.x * new_velocity,
                    y: point.lastPos.y + point.direction.y * new_velocity,
                }



                point.acceleration = point.acceleration - point.deceleration



                points[r][c].nextPos = new_pos
                points[r][c].velocity = new_velocity
                points[r][c].direction = point.direction
                points[r][c].acceleration = point.acceleration
                points[r][c].lastPos = new_pos
                points[r][c].force = point.force
                points[r][c].deceleration = point.deceleration
                points[r][c].maxDistance = point.maxDistance

            }
        }


    }


    const magnitude = (vec: Vec2) => {

        let mag = Math.sqrt(vec.x * vec.x + vec.y * vec.y)

        return mag === 0 ? 1 : mag
    }


    const normalize = (vec: Vec2) => {

        let mag = magnitude(vec)





        return {
            x: vec.x / mag,
            y: vec.y / mag
        }

    }


    const pointDistance = (p1: { x: number, y: number }, p2: { x: number, y: number }) => {

        let x = Math.abs(p2.x - p1.x)
        let y = Math.abs(p2.y - p1.y)


        return Math.sqrt(x * x + y * y)

    }



    const initPoints = (width: number, height: number) => {



        const gap = 8




        const startX = 0
        const startY = 0
        const endX = width - 0
        const endY = height - 0

        const columns = Math.floor((endX - startX) / gap)
        const rows = Math.floor((endY - startY) / gap)

        const stepX = gap
        const stepY = gap





        for (let r = 0; r < rows; r++) {

            let row: Point[] = []

            for (let c = 0; c < columns; c++) {
                let rng = Math.round(Math.random() * 100)

                row.push({
                    lastPos: {
                        x: c * stepX + startX, y: r * stepY + startY
                    },
                    initialPos: {
                        x: c * stepX + startX, y: r * stepY + startY
                    },
                    nextPos: {
                        x: c * stepX + startX, y: r * stepY + startY
                    },
                    velocity: 0,
                    acceleration: 0,
                    direction: { x: 0, y: 0 },
                    force: 'pull',
                    maxDistance: 50 + rng,
                    deceleration: 0
                })


            }

            points.push(row)
        }
    }


    const getMousePos: MouseEventHandler<HTMLCanvasElement> = (e) => {

        if (timeout) {
            clearTimeout(timeout)
            timeout = undefined
        }
        const rect = canvasRef.current?.getBoundingClientRect(), root = document.documentElement;




        const left = rect?.left ?? 0
        const top = rect?.top ?? 0


        const mouseX = e.clientX - left - root.scrollLeft;
        const mouseY = e.clientY - top;




        timeout = setTimeout(() => {
            mouseRef.current = {
                x: mouseX,
                y: mouseY,
                velocity: 0,
                last_measure: new Date().getTime(),
                direction: { x: 0, y: 0 }
            };
        }, 200)

        if (mouseRef.current) {
            let distanceX = mouseX - mouseRef.current.x
            let distancey = mouseY - mouseRef.current.y


            let distance = Math.sqrt(distanceX * distanceX + distancey * distancey)
            let last_measure = new Date().getTime()
            let duration = last_measure - mouseRef.current.last_measure
            if (duration === 0) {
                duration = 1
            }
            let velocity = distance / duration



            mouseRef.current = {
                x: mouseX,
                y: mouseY,
                velocity: velocity,
                last_measure: last_measure,
                direction: { x: mouseX - mouseRef.current.direction.x, y: mouseY - mouseRef.current.direction.y }
            };
        } else {
            mouseRef.current = {
                x: mouseX,
                y: mouseY,
                velocity: 0,
                last_measure: new Date().getTime(),
                direction: { x: 0, y: 0 }
            };

        }

    }






    return (
        <canvas onMouseMove={getMousePos} onMouseLeave={() => mouseRef.current = undefined} id='playground-canvas' ref={canvasRef} width={width} height={width > 600 ? 750 / 1350 * width : 500}></canvas>
    )
}



export default PlaygroundCanvas