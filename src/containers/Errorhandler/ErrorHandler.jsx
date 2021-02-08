import { Component } from 'react';

export class ErrorHandler extends Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        console.error(error);
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) return <h1>Кажется что-то пошло не так</h1>

        return this.props.children;
    }
}