package com.authentication.model

import org.hibernate.annotations.GenericGenerator
import javax.persistence.*

@Entity
@Table(name = "tokens")
data class Token @JvmOverloads constructor(
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    val id: String? = "",

    @Column(unique = true)
    val token: String,

    val tokenType: TokenType = TokenType.BEARER,

    var revoked: Boolean,

    var expired: Boolean,

    @ManyToOne
    @JoinColumn(name = "user_id")
    val user: User
)