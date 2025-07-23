import { useState } from 'react';
import { createBug } from '../services/api';

const BugForm = ({ refreshBugs }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBug({ title, description });
    setTitle('');
    setDescription('');
    refreshBugs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report Bug</h2>
      <input
        type="text"
        placeholder="Bug Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Bug Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BugForm;
