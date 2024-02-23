import { useState } from 'react';
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../constant';
import { useNavigate } from 'react-router-dom';

const AddPostController = () => {
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);
  const navigate = useNavigate();

  const onInputChange = (key, e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.text || !form.title) {
      toast.error('Tüm alanları doldurunuz !', {
        theme: 'dark',
        autoClose: 2000,
      });
    }
    axiosInstance.post('posts', form).then((res) => navigate('/'));
  };

  return (
    <div>
      <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
    </div>
  );
};

export default AddPostController;
