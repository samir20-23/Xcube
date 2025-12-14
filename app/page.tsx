
import Search from "./components/Search"
import BrandIcon from "./components/brandIcon"
import FeatureTitle from "./components/featureTitle"
// cards 
import MiniCard from "./components/cards/miniCard"
export default function App() {
  return (
    <div className="main">
      <div className="featur-card">
        <div>
          <BrandIcon />
          <Search />
        </div>
        <FeatureTitle />
        <div className="miniMain-card">
          <MiniCard />
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