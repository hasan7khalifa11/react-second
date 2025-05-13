import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemList from "./components/ItemList";
import { useState } from "react";
import { data } from "./data";


export default function App() {

    const [itemData, setItemData] = useState(data)

    // Get All Categories
    const allCategory = ['الكل', ...new Set(data.map((item) => item.category))]
    console.log(allCategory)

    // Filter By Category
    function filtercategory(cat) {
        if (cat === "الكل") {
            setItemData(data)
        } else {
            const newarray = data.filter((item) => item.category === cat)
            setItemData(newarray)
        }
    }

    // Filter: Search to Title
    function filterSearch(word) {
        if (word !== "") {
            const newarray = data.filter((item) => {
                console.log(word)
                return item.category === word
            })
            setItemData(newarray)
        }
    }

    return (
        <div>
            <NavBar filterSearch={filterSearch} />
            <Container>
                <Header />
                <Category filtercategory={filtercategory} categories={allCategory} />
                <ItemList items={itemData} />
            </Container>
        </div>
    )
}