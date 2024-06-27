/*prepare a short paragroaph for the tell me about youself question;

3-4 sentences aobut your journey as a coder and while you're interesed in this position

When given a prompt / question:
1. start by reading it aloud
2. state the problem in your own words. provides an interviewer to correect if if need be or you to share you need more clarification.
3. ASK CLARYFYING QUESTIONS!!! Be sure to understand the context of the question. Ask about nulls, range, & other constraints about inputs.
4. write test cases. include a case for any edge cases you may have thought about i the previous step
5. create the function signature
6. write out the program strure inside the function signature 
7. Buildout test cases 
8. write the actual code
9. run the code
19. Analyze space and time complexity
*/


// Question: remove neighboring elements that add up to 8

// [1,1]=>[1,1]
// [1,7]=>[]
// [1,4,7]=>[1,4,7]
// [1,7,2,6]=>[]
// [3,1,7,2,6,4]=>[]
// [3,4,4,5]=> [] 

function removePairsThatEqualK(array,k){
    //create a stack
    const stack = [];

    //iterate through nums
    for(const num of array){
        //if current num + num on top of stack = 8
        if(stack[stack.length-1] + num === k){

            // pop from stack
            stack.pop();
        } 
        //else
        else{
            // push num to the stack
        stack.push(num);
    }
}
    //return the stack
return stack;
    
}

console.log(removePairsThatEqualK([1,1],2),[]);
console.log(removePairsThatEqualK([1,4,7]),[1,4,7]);
console.log(removePairsThatEqualK([1,7,2,6]), []);
// console.log(removePairsThatEqualK([1,1],2),[])


function removeTripletsThatEqualK(array,k){
    //create a stack
    const stack = [];

    //iterate through nums
    for(const num of array){
        //if current num + num on top of stack = 8
        if(stack[stack.length-1] + stack[stack.length-2]+ num === k){

            // pop from stack
            stack.pop();
            stack.pop();
        } 
        //else
        else{
            // push num to the stack
        stack.push(num);
    }
}
    //return the stack
return stack;
    
}
console.log(removeTripletsThatEqualK([1,1,-1],1),[]);