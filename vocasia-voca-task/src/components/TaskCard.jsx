import React from 'react';
import {Button} from './index'
import {Done, Delete} from '../assets'

function TaskCard({ task, onMarkDone, onDelete }) {
  return (
    <div className='flex my-3 mx-0 p-2.5 items-center justify-between bg-emerald-950 text-teal-300 rounded-md w-full'>
      <h4>{task.title}</h4>
      <div>
        <Button onClick={onMarkDone} 
          className={ ' rounded-lg mr-2 hover:translate-y-0.5 translate-y-0'}> 
          <img src={Done} alt="done" /> 
        </Button>
        <Button onClick={onDelete} 
          className={' p-2 rounded-lg hover:translate-y-0.5 translate-y-0'}>
          <img src={Delete} alt="done" />
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;
