import { Component } from "@angular/core";

@Component({
    selector: 'app-grocery',
	templateUrl: './app.grocery.html',
    standalone: false,
	styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
    task: string ='';
    tasks: any = [];

    onClick(){
        this.tasks.push({name: this.task});
        this.task = '';
    }

}
