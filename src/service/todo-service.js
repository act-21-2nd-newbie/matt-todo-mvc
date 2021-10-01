import axios from "axios";

async function showTodoList(){
    const response = await axios.get("api/tasks");
    //debugger;
    return response.data.map((todoItem) => {
        if(todoItem.status === 'completed') todoItem.status = true;
        else todoItem.status = false;
        return {'id' : todoItem.id, 'name': todoItem.details, 'status' : todoItem.status};
    });
}
async function deleteTodoItemById(taskId){
    return await axios.delete('api/tasks/' + taskId);
}
async function postTodoItem(taskName){
    return await axios.post('api/tasks/',
            {'details':taskName}
    );
}
async function changeStatusOfTodoItemById(taskId, status){
    let reverseStatus = false;
    if(status === false){
        reverseStatus = 'completed';
    }
    else if(status === true){
        reverseStatus = 'active';
    }
    //console.log(reverseStatus);
    return await axios.patch('api/tasks/' + taskId,
        {'status' : reverseStatus}
    )
}

export {showTodoList, deleteTodoItemById, postTodoItem, changeStatusOfTodoItemById}