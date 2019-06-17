import { completeTodoFromDatabase } from "../networking/FirebaseUtils";
import { deleteDataFromDatabase } from "../networking/FirebaseUtils";
import { updateTodoInDatabase } from "../networking/FirebaseUtils";

// Global Listeners //

// Click List Item
$(document).on('click', '.card-body  .content .mw-85', (e) => {
    // UUID
    const todoUUID = $(e.target).parent().parent().parent().next().children()[1].innerText;
    const completeStatus = $(e.target).parent().parent().hasClass('line-thru');
    if ($(e.target).attr('contenteditable') == 'false') { // Not In Edit Mode
        completeTodoFromDatabase(todoUUID, completeStatus, (value) => {
            if (completeStatus) { // Remove Complete Status
                $(e.target).parent().parent().removeClass('line-thru');
            } else {
                $(e.target).parent().parent().addClass('line-thru');
            }
        })
    }
});

// Delete List Item
$(document).on('click', '.content .btn', (e) => {
    const postUUID = $(e.target).parentsUntil('.card').next().children('.post-id').text();
    deleteDataFromDatabase(postUUID, (value) => {
        if (value) {
            $(e.target).closest('.row').remove()
        } else {
            console.log("Error while attempting to delete");
        }
    });
});

// Edit List Item 
$(document).on('click', '.dropdown-menu .edit', (e) => {
    const todoBody = $(e.target).parent().parent().parent().prev().children();
    $(todoBody).removeClass('line-thru');
    $(todoBody).removeClass('todo-body');
    const textSpan = $($(todoBody).children()[0]).children()
    $(textSpan).attr('contenteditable', 'true');
    $(textSpan).focus();
    const saveBtn = $(e.target).parent().parent().prev();
    $(saveBtn).removeClass('d-none');
});

// Save Edit List Item
$(document).on('click', '.card-footer .btn-outline-success', (e) => {
    const todoBody = $(e.target).parent().prev().children();
    $(todoBody).addClass('todo-body');
    const textSpan = $($(todoBody).children()[0]).children()
    $(textSpan).attr('contenteditable', 'false');
    $(e.target).addClass('d-none');
    const todoText = $(todoBody).children('.mw-85').text();
    const todoUUID = $(e.target).parentsUntil('card-footer').children('.post-id').text();
    updateTodoInDatabase({
        todoUUID:todoUUID,
        todoText:todoText
    })
});