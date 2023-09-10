import { auth } from "../../firebase"

function Profile() {
    const url = `https://api.multiavatar.com/${"gigi"}.png`
    return (
        <div>
            <div>
                <img src="https://api.multiavatar.com/{}" alt="" />
            </div>
        </div>
    )
}
export default Profile;