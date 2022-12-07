//import React, { useState } from 'react';
//import { HStack, Input, Button, useToast } from '@chakra-ui/react';
//import { nanoid } from 'nanoid';

//const AddTodo = ({addTodo}) => {
  //const [content, setContent] = useState('');
  //const toast = useToast();
  
 // function handleSubmit(e) {
   // e.preventDefault();
//
  //  if(!content) {
    //  toast({
      //  title: 'Contenido vacio',
        //status: 'error',
        //duration: 2000,
        //isClosable: true
     /*  });

      return;
    }

    const todo = {
      id: nanoid(),
      body: content
    };

    addTodo(todo);
    setContent('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='12'>
      <n> </n><n> </n><n> </n><n> </n><n>  </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n>
        <Input variant='filled' placeholder='Ingrese Tarea' value={content} onChange={(e) => setContent(e.target.value)} />
        <n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n><n> </n>
        <Input variant='filled' placeholder='Descripcion'/>
        <Button type='submit' colorScheme='cyan' px='8'>Agregar </Button>
      </HStack>
    </form>
  );
}
export default AddTodo; */