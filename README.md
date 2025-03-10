<h1 align="center">🎣 My Phishing Case - 3 🎣</h1>   

## I. What's different in this campaign?

As described: 3-chains phishing – sounds interesting, right? While I was executing this phishing campaign, I wasn’t even sure where I got the idea from. Everything just happened in my head at that moment, and I thought that this might be one of the most interesting and memorable cases in my career.  

So, what makes this campaign different from the previous ones I’ve executed?   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+)Different Target: This time, the target is one of the top cybersecurity companies in Vietnam (as they often say in movies: "hacker hacks hacker").   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+)Different Scope: This time, we didn’t have the authority to decide the campaign’s scope. The objective was set as follows: Kill all! The campaign's scope covers the entire workforce of the target company - an extremely large scale.   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+)Different Execution: This time, I had to launch the phishing attack entirely from the outside, meaning I couldn't use internal emails (losing 99% of power). However, to minimize time to recon, was provided with a full list of personnel, including phone numbers, personal emails, and full names - key pieces that would complete my plan later on.   


OK, the model below will describe what I did in this campaign. I will go into detail about each chain I used in this campaign:  

<p align="center">
  <img src="https://github.com/user-attachments/assets/4c92d9b9-db16-41f3-aa0a-07a2ef37ce8e">
</p> 

## II. Setting up  

<p align="center">
  <img src="https://github.com/user-attachments/assets/3268b98a-c344-4224-8aa8-918da9b33e22">
</p>  

<p align="center">
  <img src="https://github.com/user-attachments/assets/68b376db-041f-4a66-8320-689d958ff25c">
</p>   

<p align="center">
  <img src="https://github.com/user-attachments/assets/a9ae9d12-b92a-4799-9bc9-2cebbfd9585f">
</p>

## III. Challenges and origin of the Idea  

This campaign was divided into two phases, each with different objectives: "Conduct phishing to take over employee accounts" and "Conduct phishing to take over Telegram accounts." This topic describes the process I followed in Phase 2.

Before executing this phase, I had no concrete ideas, and there were two major obstacles that made me think this campaign would never succeed:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+)Increased Awareness After Phase 1:
I had successfully executed Phase 1 by setting up a custom domain and using it to send phishing emails. The results quite good. However, after that, all employees received an alert that a phishing campaign was targeting their organization. This heightened their awareness, making them much more cautious. Additionally, from that point onward, all external emails were flagged with a warning, meaning phishing via email was now almost hopeless.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+)The Telegram Targeting Challenge:
The goal for this phase was to take over employees' Telegram accounts, but there was a big problem - not many people use Telegram. To steal a Telegram account, you first need to target someone who actually uses Telegram. But with a massive list of employees, how could I figure out who among them was using Telegram? I had no idea!   

So, the two immediate problems I needed to solve were: using a method other than email phishing and identifying employees who use Telegram.Among the information I was provided: full names, emails, and phone numbers(email was no longer an option). Looking at what I had left, I realized: phone numbers.Ah ha! I still had a direct channel to contact my targets. This immediately led me to decide on using SMS phishing.

However, to take over a target’s Telegram account, I needed to send them a malicious link leading to the fake Telegram page I had set up earlier. Sending a direct link like that via SMS would be extremely suspicious. So, I had to come up with an intermediary communication channel between SMS and the user to drop my malicious Telegram link.And, of course, Zalo was the perfect candidate - extremely popular with a massive user base in Vietnam.

At this point, the plan was almost complete. My strategy would be:   

```Send an SMS inviting the target to join a pre-created Zalo group chat -----> Drop the malicious Telegram link inside that group chat -----> Wait for users to log in -----> Capture their access tokens and take over their accounts.```   

So, the issue of "using a method other than email phishing" was solved. Now, it was time to figure out "identifying employees who use Telegram".
Honestly, even at this point, I hadn’t come up with a definitive solution to this problem. Instead of hitting a dead end, I decided to take a more comprehensive approach: preparing a scenario that would work for both Telegram users and non-Telegram users.

Everything was set. Now, it show time.

## IV. Chain 1  

## V. Chain 2    

## VI. Chain 3  
