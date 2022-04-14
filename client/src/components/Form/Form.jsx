import React, { Component } from 'react'
import './Form.css'

class Form extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        emailStatus: 'Fill out the form',
        isSending: false,
        isVerified: false
    };

    // handle the value
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    // submitBtn is clicked
    submitForm = (e) => {
        e.preventDefault();

        let data = this.state;

        console.log(data);


    }

    // when submit btn is clicked
    submitForm = (e) => {
        this.setState({ isSending: true });

        const { name, email, message } = this.state;

        this.setState({emailStatus: 'Sending...'})


        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step

            this.setState({
                emailStatus: xhr.responseText
            })

            if (this.state.emailStatus === "Message has been sent!") {
                // reset the fields
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    isSending: false
                })

                setTimeout(() => this.setState({emailStatus: 'Fill out the form'}), 5000)
            }

            this.setState({ isSending: false })
        });
        // open the request with the verb and the url
        xhr.open('GET', 'http://netint.olegkrainyk.com/index.php?sendto=' + email +
            '&name=' + name +
            '&message=' + message);
        // send the request
        xhr.send();


        e.preventDefault();
    }


    //recaptcha methods




    render() {
        const { name, email, message, emailStatus, isSending, isVerified } = this.state;
        return (
            <div className="formBlock content-center" data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement='top'>
                <div className='email-status'>{emailStatus}</div>
                <form onSubmit={this.submitForm}>
                    <div>
                        <div className='formEl'>
                            <label htmlFor='name'>
                                <input type="text" value={name} onChange={this.handleChange('name')} placeholder="Name" minLength="2" maxLength='30' required />
                            </label>
                        </div>
                        <div className='formEl'>
                            <label htmlFor='email'>
                                <input type="email" value={email} onChange={this.handleChange('email')} placeholder="Email" maxLength='50' required />
                            </label>
                        </div>
                        <div className='formEl'>
                            <label htmlFor='textarea'>
                                <textarea type="text" value={message} onChange={this.handleChange('message')} placeholder="Message" maxLength='1300' required></textarea>
                            </label>
                        </div>

                        <div className='formEl'>

                        </div>

                        <div className='submitBtn-wrapper'>
                            <label htmlFor='submit'>
                                <input type="submit" className="submitBtn" value="Submit" disabled={isSending ? 'disabled' : ''} />
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
