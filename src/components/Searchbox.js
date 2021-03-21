const Searchbox = (props) => (
  <section>
    <form onSubmit={props.handleSearch}>
      Search McDonald's nearby
      <input placeholder="insert address or area" onChange={(event) => props.setSearch({...props.search, address : event.target.value})} />
      <input placeholder="insert radius in km" onChange={(event) => props.setSearch({...props.search, radius : parseInt(event.target.value)})} />
      <button className="arrow">&#8594;</button>
    </form>

    <p className="nopark">{props.alert}</p>
  </section>
)

export default Searchbox
