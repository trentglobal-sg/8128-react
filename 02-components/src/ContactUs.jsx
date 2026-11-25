// when putting component into its own file
// the function name should be the same
// as the file name
export default function ContactUs() {
    return <>
        <form>
            <input type="email" placeholder="Your email address"/>
            <textarea placeholder="Your Comment here"></textarea>
            <button>Submit</button>
        </form>
    </>
}