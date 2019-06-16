import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
// Create relative date/time formatter.
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

export class TodoView {

    constructor(obj) {

        // Properties
        this.todo = obj.todo.value;
        this.timestamp = timeAgo.format(obj.timestamp.value);
        this.todoUUID = obj.todoUUID;
        this.complete = obj.complete.value;
        // .row .col-6 .card .card-footer .btn-group .dropdown-menu .edit
        // Methods
        this.getHtml = () => {
            return `
            <div class="row d-flex justify-content-center align-items-center mt-3">
                <div class="col-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <div class="content d-flex justify-content-between align-items-center todo-body">
                                <h1 class="mw-85"><span contenteditable="false">${this.todo}</span></h1>
                                <button class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                        <div class="card-footer text-muted d-flex justify-content-between align-items-center">
                            <span class="time-stamp">${this.timestamp}</span>
                            <span class="d-none post-id">${this.todoUUID}</span>
                            <button class="btn d-none btn-outline-success ml-auto mr-3 circle">Save</button>
                            <div class="btn-group" role="group">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a class="dropdown-item edit" href="#">Edit</a>
                                    <a class="dropdown-item archive" href="#">Archive</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `


            // return `
            // <div class="row d-flex justify-content-center align-items-center mt-3">
            // <div class="col-6">
            //     <div class="card shadow-sm">
            //         <div class="card-body">
            //             <div class="content d-flex justify-content-between align-items-center todo-body ${(this.complete ? `line-thru` : ``)}">
            //                 <h1 class="mw-85"><span contenteditable="false">${this.todo}</span></h1>
            //                 <button class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
            //             </div>
            //         </div>
            //         <div class="card-footer text-muted d-flex justify-content-between align-items-center">
            //             <span class="time-stamp">${this.timestamp}</span>
            //             <span class="d-none post-id">${this.todoUUID}</span>
            //             <div class="btn-group" role="group">
            //                 <button type="button" class="btn dropdown-toggle"
            //                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                     <i class="fas fa-ellipsis-v"></i>
            //                 </button>
            //                 <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            //                     <a class="dropdown-item edit" href="#">Edit</a>
            //                     <a class="dropdown-item archive" href="#">Archive</a>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            // </div>
            // `
        }
    }
}