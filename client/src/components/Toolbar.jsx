import canvasState from "../store/canvasState"
import toolStore from "../store/toolState"
import "../styles/toolbar.scss"
import Brush from "../tools/Brush"
import Eraser from "../tools/Eraser"
import Rect from "../tools/Rect"


export default function Toolbar() {


  const changeColor = e => {
    toolStore.setStrokeStyle(e.target.value)
    toolStore.setFillColor(e.target.value)
  }

  const download = () => {
    const dataUrl = canvasState.canvas.toDataURL()
    const a = document.createElement("a")
    a.href = dataUrl
    a.download = canvasState.sessionid + ".jpg"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="toolbar">
      <button className="toolbar__btn brush" onClick={() => toolStore.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionid))} />
      <button className="toolbar__btn react"  onClick={() => toolStore.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionid))} />
      <button className="toolbar__btn circle" />
      <button className="toolbar__btn eraser" onClick={() => toolStore.setTool(new Eraser(canvasState.canvas))} />
      <button className="toolbar__btn line" />
      <input onChange={e => changeColor(e)} style={{marginLeft: 10}} type="color" />
      <button className="toolbar__btn undo" onClick={() => canvasState.undo()} />
      <button className="toolbar__btn redo" onClick={() => canvasState.redo()} />
      <button className="toolbar__btn save" onClick={() => download()} />
    </div>
  )
}
