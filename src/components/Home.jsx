import React from "react";
import TaskAdder from "./TaskAdder";
import  TodoList  from './TodoList'


export default function Home(){
	return(
		< div className="home">
			<div>
				<h1>To Do List</h1>
			</div>
			<div>
				<TaskAdder/>
			</div>
			<div>
				<TodoList/>
			</div>
		</div>
	)
}