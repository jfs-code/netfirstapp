import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getAllTasks() {
        return [{
            id:1,
            title: "Primera tarea",
            description: "datos"
        }]
    }
    createTasks() {}
    updateTasks() {}
    deleteTasks() {}
}
