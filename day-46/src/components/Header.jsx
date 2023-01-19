export default function Header(props) {
  return (
    <div className="ui menu">
      <div className="right menu">
        <a className="item active">
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <i className="heart icon ">{props.wishlist.length}</i>

              <div class="menu">
                {props.wishlist.map((w, index) => {
                  return (
                    <div
                      className="item"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>{w.name} </div>
                      <a
                        onClick={() => {
                          console.log("remove from wishlist");
                          console.log(w.id);
                          props.setWishlist(
                            props.wishlist.filter((wish) => wish.id !== w.id)
                          );
                        }}
                      >
                        <i className="close icon "></i>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </a>

        <a className="item">
          <i className="shopping basket icon"></i>
        </a>
      </div>
    </div>
  );
}
