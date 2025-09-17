# EmailJS Setup Guide

## 🚀 Setting Up EmailJS for Contact Form

The contact form is now configured to send emails to `jasas1357@gmail.com` using EmailJS. Follow these steps to make it fully functional:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (recommended: Gmail)
4. Connect your email account (jasas1357@gmail.com)
5. Note down the **Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name:** Contact Form Template

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
New message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Save the template and note down the **Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update the JavaScript Code
The JavaScript code has been updated with your actual EmailJS credentials:

```javascript
// Your EmailJS credentials are now configured:
emailjs.init("uTX_j0BUdVXOeggaW"); // Your public key

// Service and template configuration:
emailjs.send('service_vj4w36d', 'template_contact_form', templateParams)
```

**Note:** You still need to create the email template in your EmailJS dashboard.

### Step 6: Test the Form
1. Open your website
2. Fill out the contact form
3. Submit the form
4. Check your email (jasas1357@gmail.com) for the message

## 🔧 Configuration Details

### Current Setup:
- **Recipient Email:** jasas1357@gmail.com
- **Form Fields:** Name, Email, Subject, Message
- **Validation:** Client-side validation for all fields
- **User Feedback:** Success/error messages

### EmailJS Free Plan Limits:
- 200 emails per month
- Basic templates
- Gmail/Outlook integration

## 🛠️ Troubleshooting

### Common Issues:
1. **"Service not found"** - Check your Service ID
2. **"Template not found"** - Check your Template ID
3. **"Public key invalid"** - Check your Public Key
4. **Emails not sending** - Verify your email service connection

### Testing:
- Use the EmailJS dashboard to test your service
- Check browser console for error messages
- Verify all IDs are correctly entered

## 📧 Email Template Variables

The form sends these variables to your email template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## 🔒 Security Notes

- EmailJS public keys are safe to expose in frontend code
- Service and template IDs are also public
- EmailJS handles the security of your email credentials
- No backend server required

## 📞 Support

If you need help:
1. Check EmailJS documentation
2. Use EmailJS support chat
3. Verify all configuration steps

---

**Note:** Once configured, all contact form submissions will be sent to jasas1357@gmail.com with proper formatting and validation. 

Here are several easy ways to start a local server:

## 🚀 **Method 1: Python (Easiest)**

### **If you have Python installed:**
1. **Open Command Prompt/Terminal**
2. **Navigate to your website folder:**
   ```bash
   cd "C:\Users\jasas\Downloads\MadreTierraCigars"
   ```
3. **Start the server:**
   ```bash
   python -m http.server 8000
   ```
4. **Open your browser and go to:**
   ```
   http://localhost:8000
   ```

### **If you don't have Python:**
- Download from [python.org](https://www.python.org/downloads/)
- Make sure to check "Add Python to PATH" during installation

## 🚀 **Method 2: Node.js (Alternative)**

### **If you have Node.js installed:**
1. **Open Command Prompt/Terminal**
2. **Navigate to your website folder**
3. **Install serve globally:**
   ```bash
   npm install -g serve
   ```
4. **Start the server:**
   ```bash
   serve .
   ```
5. **Open the URL shown in terminal**

### **If you don't have Node.js:**
- Download from [nodejs.org](https://nodejs.org/)

## 🚀 **Method 3: VS Code (Recommended)**

### **If you use VS Code:**
1. **Install "Live Server" extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search "Live Server"
   - Install the one by Ritwick Dey
2. **Open your website folder in VS Code**
3. **Right-click on `index.html`**
4. **Select "Open with Live Server"**
5. **Browser opens automatically**

## 🚀 **Method 4: Simple File Opening**

### **Quick Test (No Server):**
- **Double-click `index.html`** in your file explorer
- **Or drag `index.html` into your browser**
- **Note:** Some features might not work perfectly this way

## 🚀 **Step-by-Step for Python (Most Common):**

1. **Press `Win + R`** to open Run dialog
2. **Type `cmd`** and press Enter
3. **Navigate to your folder:**
   ```bash
   cd "C:\Users\jasas\Downloads\MadreTierraCigars"
   ```
4. **Start server:**
   ```bash
   python -m http.server 8000
   ```
5. **You should see:** `Serving HTTP on :: port 8000...`
6. **Open browser and go to:** `http://localhost:8000`

## ✅ **What You'll See:**
- Your website loads perfectly
- All features work including email
- URL will be `http://localhost:8000` or similar
- To stop server: Press `Ctrl + C` in terminal

**Which method would you like to try?** Python is usually the easiest if you have it installed! 