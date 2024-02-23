import { useEffect, useState } from 'react';
import ListPostView from './ListPostView';
import axios from 'axios';

const ListPostController = () => {
  const [formData, setFormData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then((res) => setFormData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <ListPostView
        formData={formData}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
};

export default ListPostController;
