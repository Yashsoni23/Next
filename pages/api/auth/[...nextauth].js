import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import FaceBook from "next-auth/providers/facebook"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'ea593a66b4feff0d9432',
            clientSecret: '49d799e10a58ad348c3d311064279eb649c93cdb'
        }),
        Google({
            clientId: "295918188205-heqlhvqu7u9u4983pek2jo5rvkt457ul.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        FaceBook({
            clientId:"508521537782907",
            clientSecret:"614df1ea0390197f0d21c4a273b00e42"
        })

    ]
}
export default NextAuth(authOptions);