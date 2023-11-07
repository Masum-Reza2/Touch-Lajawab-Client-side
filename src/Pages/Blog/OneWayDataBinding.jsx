const OneWayDataBinding = () => {
    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg md:text-xl font-extrabold">
                What is one way data binding?
            </div>
            <div className="collapse-content text-sky-800 font-medium">
                <p><span className="font-bold">One-way data binding is a concept commonly used in web development and user interface frameworks to describe the flow of data from a source</span> (usually a model or data variable) to a target (typically a UI element like a text field, label, or DOM element) in a unidirectional manner.This approach is commonly used in many modern JavaScript frameworks, such as Angular, React, and Vue.js.React primarily uses one-way data binding or a unidirectional data flow as its default data binding mechanism. This means that data flows in one direction, from parent components to child components.</p>
                <p className="mt-2">Here's how one-way data binding works in React:</p>

                <div className="list-decimal space-y-3 mt-1">
                    <li><span className="underline font-bold">Parent Component:</span> The parent component (or higher-level component) contains and manages the data.
                    </li>
                    <li><span className="underline font-bold">Props:</span> The parent component passes data to its child components using props. Props are read-only and allow data to flow from parent to child. Child components receive the data as props and can use it to render content.
                    </li>
                    <li><span className="underline font-bold">State:</span> In React, components can also have local state, which is used to manage component-specific data. State can only be modified within the component that owns it, and changes in the state trigger re-renders of that component.
                    </li>
                    <li><span className="underline font-bold">Callback Functions:</span> To update the data in the parent component, you can define callback functions in the parent and pass them as props to child components. Child components can call these functions to inform the parent about changes.
                    </li>
                </div>

            </div>
        </div>
    )
}

export default OneWayDataBinding