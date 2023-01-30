## Offer schema

![Untitled](https://user-images.githubusercontent.com/93491902/215445039-bc32c07d-af4c-4c5b-bd24-9f5974e67f5c.jpg)

## Extra explanation
 1. Job owner can send offer from chat: press "Offer", choose salary and press "Send offer". Button`s status switch to "Offer sent".

 ![Снимок экрана 2023-01-30 110818](https://user-images.githubusercontent.com/93491902/215456714-ba5d26a9-0af7-48ee-a950-1abc494ce339.png)
 
 ![Снимок экрана 2023-01-30 111033](https://user-images.githubusercontent.com/93491902/215457181-bfd6ae33-83f8-43a2-9400-65535bb539b3.png)
 
 ![Снимок экрана 2023-01-30 110856](https://user-images.githubusercontent.com/93491902/215457218-85074dfe-8faf-4fb3-ba21-5711ffd1c8f3.png)

 Creating offer object: 
  
  ```bash
  {  acceptance: false // boolean for updating offer (default "false")
     createdDate: "2023-01-30T10:00:46.022Z"
     freelancer: {} // freelancer whoom offer was sent
     hourRate: "10000" // salary that job owner proposes
     id: "211d5a1c-290c-4fa7-b1f7-3cea119ce69c"
     isAccepted: false // shows offer's status (default "false")
     job: {} // job on which offer was sent
   }
   ```
2. On the freelancer's side on job's card appears status "Offer received" with salary and under the status two buttons: "Accept" and "Decline". Job card appears in filter "My offers".


![Снимок экрана 2023-01-30 111204](https://user-images.githubusercontent.com/93491902/215449701-6c254ab6-3704-4c1f-aa8b-dcec0fa7aed4.png)

Scenario 1: freelancer press "Accept", buttons disappear and status changes to "Offer accepted".

![Снимок экрана 2023-01-30 122003](https://user-images.githubusercontent.com/93491902/215450601-c09118f9-8d69-48a6-b919-b58fb957111c.png)

Scenario 2: freelancer press "Decline", buttons disappear and status changes to "Offer declined".

![Снимок экрана 2023-01-30 122037](https://user-images.githubusercontent.com/93491902/215450723-367c0348-3ef2-4803-b07a-94534ede41c5.png)

3. On the employer`s side in the chat appear messages.

Scenario 1: freelancer press "Accept", appears message "Your offer has been accepted".

![Снимок экрана 2023-01-30 122708](https://user-images.githubusercontent.com/93491902/215452498-7df40b00-51e5-4c15-af42-c2f3f64fb6fe.png)

Scenario 2: freelancer press "Decline", appears message "Your offer has been declined".

![Снимок экрана 2023-01-30 122745](https://user-images.githubusercontent.com/93491902/215454768-267bd12f-ec61-44dd-aab1-bd500cfaa054.png)
