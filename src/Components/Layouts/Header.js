import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from './../../Contexts/products'
import logo from './../../cart1.png'
function Header() {
    const productContext = useContext(ProductContext)

    const [text, setText] = useState('')

    let formSearch = (e) => {
        e.preventDefault()
        productContext.dispatch({ type: 'formSearch', payload: e.target.value })
        let btn = document.querySelector('#btnSearch')
        e.target.value.length > 0 ? btn.classList.remove('d-none') : btn.classList.add('d-none')
        setText(e.target.value)
    }
    let formClear = (e) => {
        e.preventDefault()
        setText('')
        productContext.dispatch({ type: 'formSearch', payload: e.target.value })
        let btn = document.querySelector('#btnSearch')
        e.target.value.length > 0 ? btn.classList.remove('d-none') : btn.classList.add('d-none')
    }

    let inCartsProducts = productContext.products.filter(item => item.inCart === true)
    return (
        <>
            <nav className="navbar navbar-primary m-1  shadow ">
                <Link className="navbar-brand h1 px-3" to="/">Phone Shop</Link>
                    <form className=" form-inline my-2 my-md-0 ml-0 d-flex " >
                        <input className="form-control " type="text" placeholder="Search in Products" value={text} onChange={formSearch} />
                        <button className="btn btn-secondary d-none ml-2" style={{marginLeft: "5px"}} id="btnSearch" onClick={formClear}>clear</button>
                    </form>
                <ul className="navbar-nav mr-auto d-flex flex-row justify-content-between ">
                    <li>
                        <Link className="nav-link " to="/cartroute">
                            <span className=" mr-3 position-relative ">
                                <img src={logo} alt="" className="" />
                                <span className="position-absolute " style={{ top: '3px', right: '7px' }}>
                                    {inCartsProducts.length === 0 ?
                                        <span className="badge">  </span>
                                        : <span className="badge text-primary ml-1  ">
                                            {inCartsProducts.length}
                                        </span>}
                                </span>
                            </span>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}
export default Header

