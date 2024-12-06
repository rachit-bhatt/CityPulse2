import { Role } from "./Role"

export class AboutUs {
    ID : string = ''
    FirstName : string = ''
    LastName : string = ''
    Designation : number = Role.UI_DEVELOPER
    readonly Position : string = Role[this.Designation]
    GitHubProfile : string = ''
    LinkedInProfile : string = ''
    EmailAddress : string = ''

    constructor(
        ID : string = '',
        FirstName : string = '',
        LastName : string = '',
        Designation : number = 0,
        GitHubProfile : string = '',
        LinkedInProfile : string = '',
        EmailAddress : string = ''
    ) {
        this.ID = ID,
        this.FirstName = FirstName
        this.LastName = LastName
        this.Designation = Designation
        this.GitHubProfile = GitHubProfile
        this.LinkedInProfile = LinkedInProfile
        this.EmailAddress = EmailAddress
    }
}