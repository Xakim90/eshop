import React from "react";
import Clock from "./Clock";
import Example1 from "./Example1";
import Example2 from './Example2';

class Test extends React.Component {
    render() {
        return (
            <>
                <div className="flex m-5">
                    {/* <Clock /> */}
                    <Example1 />
                    {/* <Example2 /> */}
                </div>
            </>
        );
    }
}

export default Test;
