export default class Work {
  worker = "皮卡"
  task = "恰饭"
  setWorker(name) {
    this.worker = name
  }

  setTask(id) {
    this.task = id == 1 ? "工作" : "摸鱼"
  }

  do() {
    this.status = this.worker + "在" + this.task
  }
}