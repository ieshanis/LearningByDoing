import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const contentStyle = {
    backgroundColor: '#dd3344',
    height: '1850px',
    padding: '20px',
};

const codeBlockStyle = {
    borderRadius: '15px',
    overflowX: 'auto',
    backgroundColor: '#2d2d2d',
  };

const Content = () => {
    const codeSnippet = 
    `// Declaration and Initialization of an array
    int[] myArray; // Declaration
    myArray = new int[5]; // Initialization (creating an array of size 5)`;

    const codeSnippet2 = 
    `// Declaring and Initializing an array in one line
    int[] numbers = new int[5]; // Creates an array of integers with size 5
    
    // Initializing an array with values
    int[] myArray = { 10, 20, 30, 40, 50 }; // Initializing with specific values`;

    const codeSnippet3 = 
    `int[] myArray = { 10, 20, 30, 40, 50 };

    // Accessing elements of the array
    int firstElement = myArray[0]; // Accessing the first element (index 0)
    int thirdElement = myArray[2]; // Accessing the third element (index 2)
    
    // Modifying array elements
    myArray[4] = 60; // Modifying the fifth element (index 4)`;

    const codeSnippet4 = 
    `int[] myArray = { 10, 20, 30, 40, 50 };

    // Getting the length of the array
    int arrayLength = myArray.length; // Returns the length of the array (5 in this case)
    
    // Iterating through the array using a for loop
    for (int i = 0; i < myArray.length; i++) {
        System.out.println("Element at index " + i + ": " + myArray[i]);
    }`;

    const codeSnippet5 = 
    `// Array of Strings
    String[] names = { "Alice", "Bob", "Charlie" };
    
    // Multi-dimensional array
    int[][] matrix = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };`;

    return (
        <div style={contentStyle}>
            <h1>What are Arrays?</h1>
            <p>Arrays are a collection of elements of the same type, stored in contiguous memory locations. They provide a convenient way to store and access multiple values under a single variable name.</p>
            <div style={{ ...codeBlockStyle, maxWidth: '700px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet}
            </SyntaxHighlighter>
            </div>
    
            <h1>Declaring and Initializing Arrays</h1>
            <p>Arrays can be declared and initialized in Java using square brackets []. Initialization involves allocating memory for the array and specifying its size.</p>
            <div style={{ ...codeBlockStyle, maxWidth: '750px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet2}
            </SyntaxHighlighter>
            </div>

            <h1>Accessing Elements of Arrays</h1>
            <p>Array elements are accessed using their index, starting from 0 to length - 1. Indexing allows reading and modifying individual elements of an array.</p>
            <p>Arrays can be declared and initialized in Java using square brackets []. Initialization involves allocating memory for the array and specifying its size.</p>
            <div style={{ ...codeBlockStyle, maxWidth: '700px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet3}
            </SyntaxHighlighter>
            </div>

            
            <h1>Array Length and Iterating through Arrays</h1>
            <p>The length property in Java arrays returns the number of elements in the array. Iterating through arrays using loops (like for loop) helps in accessing and processing each element.</p>
            <div style={{ ...codeBlockStyle, maxWidth: '850px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet4}
            </SyntaxHighlighter>
            </div>

            <h1>Arrays of Other Data Types and Multi-Dimensional Arrays</h1>
            <p>Arrays can hold elements of different data types. Multi-dimensional arrays are arrays of arrays and can have multiple dimensions.</p>
            <p>The length property in Java arrays returns the number of elements in the array. Iterating through arrays using loops (like for loop) helps in accessing and processing each element.</p>
            <div style={{ ...codeBlockStyle, maxWidth: '600px' }}>
            <SyntaxHighlighter language="java" style={materialDark}>
            {codeSnippet5}
            </SyntaxHighlighter>
            </div>

            <h1>Conclusion</h1>
            <p>Arrays in Java serve as crucial data structures, efficiently storing elements accessed by indices. Their fixed size and flexibility enable diverse applications in programming, ranging from simple data storage to complex algorithmic solutions.</p>
        </div>
    );
}

export default Content;