
export class TodoView {

    constructor(obj) {

        // Properties
        this.todoBody = obj.todo;
        this.timeStamp = obj.timestamp;
        this.postId = obj.todoUUID;

        console.log(obj);

        // Methods
        this.getHtml = () => {
            return `
            <div class="row d-flex justify-content-center align-items-center mt-3">
            <div class="col-6">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <div class="content d-flex justify-content-between align-items-center todo-body">
                            <h1>${this.todoBody}</h1>
                            <button class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                    <div class="card-footer text-muted d-flex justify-content-between align-items-center">
                        <span class="time-stamp">${this.timeStamp}</span>
                        <span class="d-none post-id">${this.postId}</span>
                        <div class="btn-group" role="group">
                            <button type="button" class="btn dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a class="dropdown-item" href="#">Edit</a>
                                <a class="dropdown-item" href="#">Archive</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            `
        }
    }
}