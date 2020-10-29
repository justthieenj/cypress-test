class StringHelper {

    randomString(length) {
        return Math.random().toString(36).substring(length)
    }

}

export default StringHelper;