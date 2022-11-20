# Lab 8 - Starter  

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.  
   
- Within a Github action that runs whenever code is pushed   
   Just like the GitHub Actions experiment we did at LAB5, test every time you push the code to github.    
   Because before merging code from other branches into the main branch, we need to test whether there is a problem with the new code.  
   This saves us the step of reverting the version and knowing the problem before merging.   

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)  
- No, we should use unit testing to test functions.  

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- No, the message is sent to another user, there is no way of knowing whether other users received the message by using unit testing.  

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   
- Yes, unit test can check our input text length. If the length is greater than 80, then the test will not pass.  

# screenshots  
![](https://github.com/ZijianSuUCSD/Lab8_Starter/blob/main/part_1.png?raw=true)  

![](https://github.com/ZijianSuUCSD/Lab8_Starter/blob/main/part_2_1.png?raw=true)  

![](https://github.com/ZijianSuUCSD/Lab8_Starter/blob/main/part2_2.png?raw=true)  
