import React, { useState } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";
import "../../../styles/dashboard.scss";
import styles from "../../../styles/Listing.module.scss";

const categories = [
    { id: "AMC's", label: "AMC's", icon: "/imgs/categories/marketing.png" },
    { id: "Accounts and Taxation", label: "Accounts and Taxation", icon: "/imgs/categories/marketing.png" },
    { id: "Advtg & Marketing", label: "Advtg & Marketing", icon: "/imgs/categories/marketing.png" },
    { id: "Agent", label: "Agent", icon: "/imgs/categories/marketing.png" },
    { id: "Agriculture", label: "Agriculture", icon: "/imgs/categories/marketing.png" },
    { id: "Architect", label: "Architect", icon: "/imgs/categories/marketing.png" },
    { id: "Art & Design", label: "Art & Design", icon: "/imgs/categories/marketing.png" },
    { id: "Audit", label: "Audit", icon: "/imgs/categories/marketing.png" },
    { id: "Automobile", label: "Automobile", icon: "/imgs/categories/marketing.png" },
    { id: "Beauty", label: "Beauty", icon: "/imgs/categories/marketing.png" },
    { id: "Carpenter", label: "Carpenter", icon: "/imgs/categories/marketing.png" },
    { id: "Chartered Accountant", label: "Chartered Accountant", icon: "/imgs/categories/marketing.png" },
 
];

const Category = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSelect = (id) => {
        if (selectedCategories.includes(id)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== id));
        } else if (selectedCategories.length < 2) {
            setSelectedCategories([...selectedCategories, id]);
        }
    };

    return (
        <section className="enrollment-main">
            <div>
                <div className="pageHeading">
                <button className="back-btn">←</button>
                    <h3>Business Listing</h3>
                </div>
                <div className="innerContainer">
                    <div className="form-card">
                        <h2>Business / Professional Categories</h2>
                        <p style={{textAlign:"center"}}>Select at least one (Max 2)</p>

                        <div className="category-box">
                            <ul>
                                {categories.map((category) => (
                                    <li key={category.id} 
                                        className={selectedCategories.includes(category.id) ? "selected" : ""}
                                        onClick={() => handleSelect(category.id)}
                                    >
                                        <span>
                                            <img src={category.icon} alt={category.label} />
                                        </span>
                                        <h5>{category.label}</h5>
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category.id)}
                                            readOnly
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <button>
                    <img src="/imgs/icons/previous.png" style={{ width: "40px" }} /> Previous
                </button>
                <button>
                    Next <img src="/imgs/icons/next.png" style={{ width: "40px" }} />
                </button>
            </div>
        </section>
    );
};

export default Category;
