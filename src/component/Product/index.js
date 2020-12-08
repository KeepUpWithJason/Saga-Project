import React from 'react'

class Product extends React.Component {

    componentDidMount() {
        this.props.fetchProduct()
    }

    render() {
        let { ProductData } = this.props
        let { isFecching, data, err } = ProductData
        if (isFecching) {
            return (
                <fieldset>
                    <legend>Product</legend>
                    <h1>正在获取数据...</h1>
                </fieldset>
            )
        } else if (!isFecching && data) {
            return (
                <fieldset>
                    <legend>Product</legend>
                    <ul>
                        {data.map(item => {
                            return (
                                <li key={item.id}>
                                    商品名：
                                    <span>{item.title}</span>
                                    -------
                                    价格:
                                    <span>{item.price}</span>
                                    -------
                                    库存:
                                    <span>{item.inventory}</span>
                                </li>
                            )

                        })}
                    </ul>
                </fieldset>
            )
        } else if (!isFecching && err) {
            return (
                <fieldset>
                    <legend>Product</legend>
                    <h1>数据获取失败...</h1>
                </fieldset>
            )
        }

    }
}

export default Product