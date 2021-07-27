package com.mih.webauthn.demo.web;

import com.mih.webauthn.BytesUtil;
import com.mih.webauthn.demo.data.MyUser;
import com.mih.webauthn.domain.WebAuthnCredentialsRepository;
import com.mih.webauthn.domain.WebAuthnUser;
import com.mih.webauthn.domain.WebAuthnUserRepository;
import com.yubico.webauthn.RelyingParty;
import com.yubico.webauthn.StartRegistrationOptions;
import com.yubico.webauthn.data.ByteArray;
import com.yubico.webauthn.data.PublicKeyCredentialCreationOptions;
import com.yubico.webauthn.data.UserIdentity;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.security.SecureRandom;
import java.util.Base64;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;


@SpringBootTest
class AuthControllerTest {
    private static final Logger log = LoggerFactory.getLogger(AuthControllerTest.class);

    @Autowired
    RelyingParty relyingParty;
//    @MockBean
//    WebAuthnCredentialsRepository credentialsRepository;
    @Autowired
    WebAuthnUserRepository appUserRepository;

    @Test
    public void testGetChallenge() {
        WebAuthnUser user = new MyUser();
        user.setUsername("test");
        appUserRepository.save(user);

        PublicKeyCredentialCreationOptions credentialCreation = this.relyingParty
                .startRegistration(StartRegistrationOptions.builder()
                        .user(UserIdentity.builder().name(user.getUsername()).displayName(user.getUsername())
                                .id(new ByteArray(BytesUtil.longToBytes(user.getId()))).build())
                        .build());

        log.info("test: " + credentialCreation);
    }

    @Test
    public void testEncoding() {
        byte[] recoveryToken = new byte[16];
        new SecureRandom().nextBytes(recoveryToken);

        byte[] recoveryTokenDecoded = null;
        recoveryTokenDecoded = Base64.getDecoder().decode(
                Base64.getEncoder().encodeToString(recoveryToken)
        );

        assertArrayEquals(recoveryToken, recoveryTokenDecoded);
    }

}