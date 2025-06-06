const Grocery = () => {
    return <h1 className="p-4 m-4 flex justify-center"> Our grocery online store , and we have lot of child components inside this web page!!!</h1>
}

export default Grocery;


// Chunking
// Code splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// Dynamic import

// How it Works

// React sees a component wrapped in lazy.
// When the app renders and reaches that component:
// If it's not loaded yet → it shows the fallback.
// Once loaded → replaces fallback with the actual component.
// Without Suspense, a lazy component will throw an error.