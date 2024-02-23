import PopupController from '../../components/Popup/PopupController';

const ListPostView = ({
  formData,
  showPopup,
  setShowPopup,
  username,
  setUsername,
}) => {
  return (
    <div className="container">
      {formData?.map((form) => (
        <div className="post" key={form.id}>
          <div className="info">
            <h3>{form.title}</h3>
            <p
              onClick={(e) => {
                setShowPopup(true);
                setUsername(form.user);
              }}
            >
              {form.user}
            </p>
          </div>
          <p className="text">{form.text}</p>
        </div>
      ))}
      {showPopup && (
        <PopupController setShowPopup={setShowPopup} username={username} />
      )}
    </div>
  );
};

export default ListPostView;
