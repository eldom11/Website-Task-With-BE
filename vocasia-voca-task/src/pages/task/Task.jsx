import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskCard, ProfileInfo, Input, Button } from '../../components'
import { Add } from '../../assets'
import { getTasks, addTask, markTaskDone, deleteTask } from '../../API/task'
import { getUserProfile } from '../../API/user'


function Task() {
  const [tasks, setTasks] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [newTask, setNewTask] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!token) {
      navigate('/');
    } else {
      async function loadProfileAndTasks() {
        try {
          const user = await getUserProfile(token);
          if (user) {
            setName(user.name || '');
            setAvatarUrl(user.photo_url || '');
          } else {
            setErrorMessage(user.message || 'Error fetching user profile');
          }

          await loadTasks(); 
        } catch (error) {
          console.error('Error fetching user profile or tasks:', error);
          setErrorMessage('Error fetching data');
        }
      }

      loadProfileAndTasks();
    }
  }, [token, navigate]);

  const loadTasks = async () => {
    try {
      const taskData = await getTasks(token);
      if (Array.isArray(taskData.data)) {
        setTasks(taskData.data.filter((task) => task.isDone === false));
        setTaskDone(taskData.data.filter((task) => task.isDone === true));
      } else {
        console.error('Error: Data is not an array');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async () => {
    if (newTask.trim() !== '') {
      try {
        await addTask(token, newTask);
        setNewTask('');
        await loadTasks(); 
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  const handleMarkDone = async (taskId) => {
    try {
      await markTaskDone(token, taskId);
      await loadTasks(); 
    } catch (error) {
      console.error('Error marking task as done:', error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(token, taskId);
      await loadTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditProfile = () => {
    navigate('/profile');
  };

  const handleSignOut = () => {
    localStorage.removeItem('token')
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
            <Button 
              className={'bg-emerald-400 p-1.5 shadow-lg shadow-black rounded-lg w-1/4 hover:bg-emerald-300 hover:shadow-none hover:translate-y-1 translate-y-0'} 
              onClick={handleAddTask} 
              title="Add Task"
            > 
              <img src={Add} alt="Add" /> 
            </Button>
          </div>

          <div>
            <h2 className='font-bold text-white'>Tasks To Do - {tasks.length}</h2>
            {tasks.length === 0 ? (
              <p className="text-white">No tasks to do yet!</p>
            ) : (
              tasks.map((task) => (
                task && task._id && !task.isDone && (
                  <TaskCard
                    key={task._id}
                    task={task}
                    onMarkDone={() => handleMarkDone(task._id)}
                    onDelete={() => handleDelete(task._id)}
                  />
                )
              ))
            )}
          </div>

          <div className='mt-5'>
            <h2 className='font-bold text-white'>Done - {taskDone.length}</h2>
            {taskDone.length > 0 ? (
              taskDone.map((task) => (
                task && task._id && (
                  <div key={task._id} className="flex my-3 mx-0 p-2.5 items-center justify-between bg-emerald-950 rounded-md w-full h-14">
                    <h4 className="line-through text-teal-600">{task.title}</h4>
                  </div>
                )
              ))
            ) : (
              <p className="text-white">No tasks done yet!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
