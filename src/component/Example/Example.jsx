import React, { useEffect, useState, useLayoutEffect, useMemo } from 'react';

export const Example = () => {
    const [count, setCount] = useState(() => {
        console.log('вызов constructor');

        return 0;
    });

    useEffect(() => {
        console.log('вызов componentDidMount');
        return () => {
            console.log('componentDidUnmount');
        }
    }, []);

    useEffect(() => {
        if(count) console.log('вызов componentDidUpdate');
    }, [count])

    useMemo(() => {
        if (count) console.log('вызов shouldComponentUpdate');
    });


    return (
        function () {
            console.log('вызов render');
            return (
                <div>
                    <p>Вы нажали {count} раз</p>
                    <button onClick={() => setCount(count + 1)}>
                        Нажми на меня
                </button>
                </div>
            )
        }()
    )
}