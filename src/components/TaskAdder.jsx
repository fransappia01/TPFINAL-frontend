import React from "react";
import '../style/TaskAdder.css'
import {Button} from '@chakra-ui/react';
export default function TaskAdder() {
	return (
		<div className="add-menu">
			<form>
				<label>Title: </label>
				<input type='text'></input>
				<label>Description: </label>
				<input type='text'></input>
                <Button type='submit' colorScheme='cyan' px='8'>Add task </Button>
			</form>
		</div>
	)
}