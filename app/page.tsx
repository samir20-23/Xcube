
import Search from "./components/Search"
import BrandIcon from "./components/brandIcon"
export default function App() {
  return (
    <div className="main">
      <div className="featur-card">
        <BrandIcon />
        <Search />
        <p className="feature-description">
          Compact. <br />
          Powerful. <br />
          Reliable. <br />
        </p>
        <div className="mini-card">
        </div>
      </div>
      <div className="right-card">
        <div className="productT-card">

        </div>
        <div className="productB-card">

        </div>
      </div>

    </div>
  )
}