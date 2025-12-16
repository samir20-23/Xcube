
import Search from "./components/Search"
import BrandIcon from "./components/brandIcon"
import FeatureTitle from "./components/featureTitle"
import ProductCardT from "./components/cards/productCardT"
import ProductCardB from "./components/cards/productCardB"
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
        <ProductCardT />
        <ProductCardB />

      </div>

    </div >
  )
}