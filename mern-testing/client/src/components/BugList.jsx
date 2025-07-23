import { useEffect, useState } from 'react';
import { fetchBugs, deleteBug, updateBug } from '../services/api';

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    loadBugs();
  }, []);

  const loadBugs = async () => {
    const { data } = await fetchBugs();
    setBugs(data);
  };

  const handleDelete = async (id) => {
    await deleteBug(id);
    loadBugs();
  };

  const handleStatusChange = async (id, newStatus) => {
    await updateBug(id, newStatus);
    loadBugs();
  };

  return (
    <div>
      <h2>Bug List</h2>
      {bugs.map(bug => (
        <div key={bug._id}>
          <h4>{bug.title}</h4>
          <p>{bug.description}</p>
          <p>Status: {bug.status}</p>
          <button onClick={() => handleStatusChange(bug._id, 'in-progress')}>In-Progress</button>
          <button onClick={() => handleStatusChange(bug._id, 'resolved')}>Resolved</button>
          <button onClick={() => handleDelete(bug._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BugList;
