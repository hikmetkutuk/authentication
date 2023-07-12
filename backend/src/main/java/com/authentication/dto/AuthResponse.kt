package com.authentication.dto

import com.authentication.model.Token

data class AuthResponse(
    val token: String
) {
    companion object {
        @JvmStatic
        fun convert(from: Token): AuthResponse {
            return AuthResponse(
                from.token
            )
        }
    }
}