import React from 'react';

export default function CoinTable({ coins } : any) {

    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <td>Type</td>
                    <td>Value</td>
                    <td>Quantity</td>
                </tr>
            </thead>
            <tbody>
                {coins && coins.map((coin: any, index: number) => (
                    <tr key={index}>
                        <td>
                            {coin.getType()}
                        </td>
                        <td>
                            {coin.getValue()/100}
                        </td>
                        <td>
                            {coin.getQuantity()}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}