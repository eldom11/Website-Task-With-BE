import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {TaskCard, ProfileInfo, Input, Button} from '../../components'
import {Add, Profile} from '../../assets'


function Task() {
  const [tasks, setTasks] = useState([
    { text: "To Study React Fundamental", done: false },
    { text: "To Learn JavaScript", done: false },
    { text: "Complete Project", done: false },
    { text: "Watch the Vocasia LMS Video", done: false },
  ]);
  const [taskDone, setTaskDone] = useState([
    { text: "Pray 5 Times a Day", done: true }
  ]);
  const [name, setName] = useState(localStorage.getItem('name') || "John Doe");
  const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem('avatarUrl') || Profile);
  const [newTask, setNewTask] = useState("");

  const navigate = useNavigate();

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = { text: newTask, done: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask(""); 
    }
  };

  const handleMarkDone = (index) => {
    const taskToMark = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index)); 
    setTaskDone([...taskDone, { ...taskToMark, done: true }]);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditProfile = () => {
    navigate('/profile');
  };

  const handleSignOut = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    navigate('/');
  };

  return (
    <div className="bg-gradient-to-tr from-fuchsia-950 via-emerald-700 to-neutral-900 w-screen h-screen flex justify-center items-center">
      <div className='w-auto p-4 flex h-5/6'>
        <div className='w-56 mb-20 text-white' >
          <ProfileInfo 
            name={name} 
            avatarUrl={avatarUrl} 
            onEditProfile={handleEditProfile} 
            onSignOut={handleSignOut} 
            className={'bg-zinc-900/60 w-full h-full rounded-lg flex flex-col justify-center items-center'}
          />
        </div>

        <div className='flex flex-col ml-2 w-auto bg-zinc-900/50 rounded-lg py-10 px-14'>
          <div className='flex items-center mb-6'>
            <Input
              type="text"
              name="newTask"
              id="newTask"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className={'w-80 mr-2 rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:border-2 border-none focus:border-black'}
            />
            <Button className={'bg-emerald-400 p-1.5 shadow-lg shadow-black rounded-lg w-1/4 hover:bg-emerald-300 hover:shadow-none hover:translate-y-1 translate-y-0'} onClick={handleAddTask} title="Add Task"> <img src={Add} alt="Add" /> </Button>
          </div>

          <div>
            <h2 className='font-bold text-white'>Tasks To Do - {tasks.length}</h2>
            {tasks.map((task, index) => (
              !task.done && (
                <TaskCard 
                  key={index}
                  task={task}
                  onMarkDone={() => handleMarkDone(index)}
                  onDelete={() => handleDelete(index)}
                />
              )
            ))}
          </div>

          <div className='mt-5'>
            <h2 className='font-bold text-white'>Done - {taskDone.length}</h2>
            {taskDone.length > 0 ? (
              taskDone.map((task, index) => (
                <div key={index} className='flex my-3 mx-0 p-2.5 items-center justify-between bg-emerald-950 rounded-md w-full h-14'>
                  <h4 className='line-through text-teal-600'>{task.text}</h4>
                </div>
              ))
            ) : (
              <p className='text-white'>No tasks done yet!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
