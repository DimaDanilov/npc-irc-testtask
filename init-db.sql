--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-09-01 21:46:24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16839)
-- Name: Author; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Author" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    surname character varying(255) NOT NULL,
    birthdate date,
    time_created timestamp with time zone NOT NULL,
    time_updated timestamp with time zone NOT NULL
);


ALTER TABLE public."Author" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16838)
-- Name: Author_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Author_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Author_id_seq" OWNER TO postgres;

--
-- TOC entry 3336 (class 0 OID 0)
-- Dependencies: 214
-- Name: Author_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Author_id_seq" OWNED BY public."Author".id;


--
-- TOC entry 217 (class 1259 OID 16848)
-- Name: Book; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Book" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    price numeric(10,2) NOT NULL,
    time_created timestamp with time zone NOT NULL,
    time_updated timestamp with time zone NOT NULL,
    author_id integer,
    publication_date date
);


ALTER TABLE public."Book" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16847)
-- Name: Book_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Book_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Book_id_seq" OWNER TO postgres;

--
-- TOC entry 3337 (class 0 OID 0)
-- Dependencies: 216
-- Name: Book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Book_id_seq" OWNED BY public."Book".id;


--
-- TOC entry 3178 (class 2604 OID 16842)
-- Name: Author id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Author" ALTER COLUMN id SET DEFAULT nextval('public."Author_id_seq"'::regclass);


--
-- TOC entry 3179 (class 2604 OID 16851)
-- Name: Book id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Book" ALTER COLUMN id SET DEFAULT nextval('public."Book_id_seq"'::regclass);


--
-- TOC entry 3328 (class 0 OID 16839)
-- Dependencies: 215
-- Data for Name: Author; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Author" (id, name, surname, birthdate, time_created, time_updated) FROM stdin;
1	Александр	Пушкин	1799-06-06	2023-08-28 23:37:23.315+03	2023-08-28 23:54:28.859+03
2	Лев	Толстой	1828-09-09	2023-08-28 23:38:06.854+03	2023-08-28 23:56:54.115+03
20	Михаил	Лермонтов	1814-10-15	2023-09-01 21:35:24.17+03	2023-09-01 21:38:38.975+03
\.


--
-- TOC entry 3330 (class 0 OID 16848)
-- Dependencies: 217
-- Data for Name: Book; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Book" (id, title, price, time_created, time_updated, author_id, publication_date) FROM stdin;
1	Капитанская дочка	999.99	2023-08-29 00:04:01.3+03	2023-08-29 00:04:01.3+03	1	1836-01-01
2	Война и мир	499.99	2023-08-29 00:05:38.4+03	2023-08-29 00:07:17.057+03	2	1865-01-01
7	Герой нашего времени	699.99	2023-09-01 21:37:38.126+03	2023-09-01 21:37:38.126+03	20	1840-01-01
8	Мцыри	599.99	2023-09-01 21:37:54.432+03	2023-09-01 21:37:54.432+03	20	1840-01-01
9	Бородино	999.99	2023-09-01 21:38:07.707+03	2023-09-01 21:38:07.707+03	20	1837-01-01
\.


--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 214
-- Name: Author_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Author_id_seq"', 20, true);


--
-- TOC entry 3339 (class 0 OID 0)
-- Dependencies: 216
-- Name: Book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Book_id_seq"', 9, true);


--
-- TOC entry 3181 (class 2606 OID 16846)
-- Name: Author Author_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Author"
    ADD CONSTRAINT "Author_pkey" PRIMARY KEY (id);


--
-- TOC entry 3183 (class 2606 OID 16853)
-- Name: Book Book_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Book"
    ADD CONSTRAINT "Book_pkey" PRIMARY KEY (id);


--
-- TOC entry 3184 (class 2606 OID 17110)
-- Name: Book Book_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Book"
    ADD CONSTRAINT "Book_author_id_fkey" FOREIGN KEY (author_id) REFERENCES public."Author"(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2023-09-01 21:46:24

--
-- PostgreSQL database dump complete
--

