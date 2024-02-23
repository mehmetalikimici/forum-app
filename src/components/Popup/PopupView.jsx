const PopupView = ({ setShowPopup, username, data }) => {
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          <h4>
            <span>{username}</span> kullanıcısının gönderileri
          </h4>
          <button onClick={(e) => setShowPopup(false)}>Kapat</button>
        </div>
        {!data ? (
          <p>Yükleniyor</p>
        ) : (
          data?.map((i) => (
            <div key={i.id} className="post">
              <h2>{i.title}</h2>
              <p>{i.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupView;
